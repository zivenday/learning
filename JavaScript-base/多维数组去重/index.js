//自定义方法
function flat(arr, target) {
	arr.forEach(element => {
		console.log(
			'=====',
			Object.prototype.toString.call(element) === '[object Array]',
		)
		if (Object.prototype.toString.call(element) === '[object Array]') {
			flat(element, target)
		} else {
			target.push(element)
		}
	})
	return target
}

function uniqiuArr(arr) {
	return Array.from(new Set(flat(arr, [])))
}

function uniqiuArr2(arr) {
	return Array.from(new Set(arr.flat(Infinity)))
}

console.log(uniqiuArr2([11, 2, 3, [4, [4, 6, [7, [8, 9, 1]]]]]))
