const BadgeSize = {
	single: '4x3',
	double: '4x6'
}

const Print = {
	standart: 'color',
	fast: 'zpl'
}

enum BadgeTypesEnum {
	COLOR = 'color',
	MONO = 'mono'
}

type BadgeSizeType = keyof typeof BadgeSize;
type PrintType = keyof typeof Print;


class Student {
	badgeTypeMap = new Map<string,  BadgeTypesEnum>([
		['single_fast', BadgeTypesEnum.COLOR],
		['single_standart', BadgeTypesEnum.COLOR],
		['double_fast', BadgeTypesEnum.MONO],
		['double_standart', BadgeTypesEnum.MONO]
	])

	_firstName: string;
	_lastName: string;
	_birthYear: number;
	_grades: {workName: string, mark: boolean}	[] = []; // Опишите, как объект у которого есть поле workName и mark(оценка может быть выполненно или нет)
	_visits: {lesson: string, present: boolean}	[] = []; // Опишите, как объект у которого есть поле lesson (любое имя) и present

	get fullName(): string {
		return `${this._lastName} ${this._firstName}`;
	}

	set fullName(value: string) {
		[this._lastName, this._firstName] = value.split(' ');
	}

	get age(): number {
		return new Date().getFullYear() - this._birthYear;
	}

	constructor(firstName: string, lastName: string, birthYear: number) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._birthYear = birthYear;
	}

	setGrade(grade: {workName: string, mark: boolean}) {
		this._grades.push(grade);
	}

	setVisit(visit: {lesson: string, present: boolean}) {
		this._visits.push(visit);
	}

	getPerformanceRating() {
		const gradeValues = Object.values(this._grades);

		if (!gradeValues.length) return 0;

		const averageGrade = gradeValues.reduce((sum, grade) => sum + (grade.mark ? 1 : 0), 0) / gradeValues.length;
		const attendancePercentage = (this._visits.filter(present => present).length / this._visits.length) * 100;

		return (averageGrade + attendancePercentage) / 2;
	}
}