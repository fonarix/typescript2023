// Initial file
console.log("Begin");

/*
    Вам необхідно написати додаток Todo list. У списку нотаток повинні бути методи для
    1 додавання нового запису,
    2 видалення, 3
    3 редагування та
    4 отримання повної інформації про нотаток за ідентифікатором, а так само отримання списку всіх нотатік.

    Крім цього, у користувача має бути можливість позначити нотаток, як виконаний, і отримання інформації про те,
    скільки всього нотаток у списку і скільки залишилося невиконаними.
    Нотатки не повинні бути порожніми.
    Кожний нотаток має назву, зміст, дату створення і редагування та статус.
    Нотатки бувають двох типів. Дефолтні та такі, які вимагають підтвердження при ридагуванні (окремі класи).
    Окремо необхідно розширити поведінку списку та додати можливість пошуку нотатка по будь-якому філду,
    або у якості опції вказувати по якому саме вести пошук.
    Також окремо необхідно розширити список можливістю сортування нотаток за статусом або часом створення.
*/


enum eNoteStatus {
    kNSNone,
    kNSUrgent,
    kNSCanSkip
};

interface INote {
    private _caption: string;
    private _text: string;
    private _date: Date;
    private _status: eNoteStatus;
    private _editAllowed: boolean;

    //get caption(): string;
    //set caption(inCaption: string): boolean;
    get text(): string;
    set text(inText: string): boolean;
    get date(): Date;
    set date(inDate: Date): boolean;
    get status(): eNoteStatus;
    set status(inStatus: eNoteStatus): boolean;

    get editAllowed(): boolean;
    set editAllowed(inEditAllowed: boolean): boolean;

    isEmpty(): boolean;
};



class CBaseNote implements INote
{
    // INote
    _caption: string;
    _text: string;
    _date: Date;
    _status: eNoteStatus;
    _editAllowed: boolean;
    _isDone: boolean;

    get caption(): string
    {
        return this._caption;
    }

    set caption(inCaption: string): boolean
    {
        if (!this._editAllowed)
        {
            throw("Edit not allowed! Call allowEdit() to edit.");
        }
        this._caption = inCaption;
    }

    get text(): string
    {
        return this._text;
    }

    set text(inText: string): boolean
    {
        if (!this._editAllowed)
        {
            throw("Edit not allowed! Call allowEdit() to edit.");
        }
        this._text = inText;
    }

    get date(): Date
    {
        return this._date;
    }
    set date(inDate: Date): boolean
    {
        if (!this._editAllowed)
        {
            throw("Edit not allowed! Call allowEdit() to edit.");
        }
        this._date = inDate;
    }

    get status(): eNoteStatus
    {
        return this._status;
    }
    set status(inStatus: eNoteStatus): boolean
    {
        if (!this._editAllowed)
        {
            throw("Edit not allowed! Call allowEdit() to edit.");
        }
        this._status = inStatus;
    }

    get editAllowed(): boolean;

    set editAllowed(inEditAllowed: boolean): boolean
    {
        if (!this._editAllowed)
        {
            throw("Edit not allowed! Call allowEdit() to edit.");
        }
        this._editAllowed = inEditAllowed;
    }


    public isEmpty(): boolean
    {
        return (!this._text || this._text.length === 0);
    }

    constructor(inCaption: string, inText: string)
    {
        this._caption = inCaption;
        this._text = inText;
        this._date = new Date();
        this._isDone = false;
        this._status = eNoteStatus.kNSNone;
        this._editAllowed = true;
    }

    setAsDone()
    {
        this._isDone = false;
    }

    allowEdit()
    {
        this._editAllowed = true;
    }

    disallowEdit()
    {
        this._editAllowed = false;
    }

}

class CSingleNote extends CBaseNote
{
    constructor(inCaption: string, inText: string)
    {
        super(inCaption, inText);
    }

};

class CSingleNoteWithApprove extends CBaseNote
{

    constructor(inCaption: string, inText: string)
    {
        super(inCaption, inText);
        this.disallowEdit();
    }

};


class CToDoList
{
    public mNoteList: INote[];

    SortByDate(): void
    {
        this.mNoteList.sort((a, b) => {
            return a.date.getTime() - b.date.getTime();
          })
    }

    SortByStatus(): void
    {
        this.mNoteList.sort((a, b) => {
            return a.status - b.status;
          })
    }

    AddNote(note: INote): boolean
    {
        if (note.isEmpty())
        {
            console.log("Cant add empty Note!");
            return false;
        }

        return true;
    }

    SearchByText(inSearchText: string): INote[] {
        let filtered: INote[];

        let result = this.mNoteList.filter((item) => {
            const theText = item.text.toLowerCase();

            if (theText.includes(inSearchText.toLowerCase()))
            {
                return true;
            }
            return false;
        }
        );

        return filtered;
    }


};

let toDo: CToDoList = new CToDoList();

toDo.AddNote(new CSingleNote("My Note", ""));
toDo.AddNote(new CSingleNote("My Note", "Buy a coffe"));


let myNote1 = new CSingleNote("My Note", "Buy a coffe");
toDo.AddNote(myNote1);

let myNote2 = new CSingleNoteWithApprove("My Note", "Buy a coffe");
myNote2.allowEdit();
toDo.AddNote(myNote1);


