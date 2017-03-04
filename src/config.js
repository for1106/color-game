export const shuffle = (arr) => {
	let new_arr = arr;

	for (let i = new_arr.length; i > 0; i--) {
		let j = Math.floor(Math.random() * i);

		let temp = new_arr[i - 1];
		new_arr[i - 1] = new_arr[j];
		new_arr[j] = temp;
	}

	return new_arr;
};

export const color_map = [
	{
		name:'red',
		cname:'紅',
	},{
		name:'dodgerblue',
		cname:'藍',
	},{
		name:'green',
		cname:'綠',
	},{
		name:'yellow',
		cname:'黃',
	},{
		name:'white',
		cname:'空',
	}
];