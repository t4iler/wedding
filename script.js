const weddingDate = new Date('2025-08-06T00:00:00');
weddingDate.setMonth(9);
weddingDate.setDate(13);

function updateCountdown() {
	const now = new Date()
	const timeDifference = weddingDate.getTime() - now.getTime()

	// Если дата уже прошла
	if (timeDifference <= 0) {
		document.getElementById('days').textContent = '00'
		document.getElementById('hours').textContent = '00'
		document.getElementById('minutes').textContent = '00'
		document.getElementById('seconds').textContent = '00'
		return
	}

	// Расчет дней, часов, минут и секунд
	const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
	const hours = Math.floor(
		(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	)
	const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
	const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

	// Обновление значений в HTML с форматированием (добавление ведущих нулей)
	document.getElementById('days').textContent = days.toString().padStart(2, '0')
	document.getElementById('hours').textContent = hours
		.toString()
		.padStart(2, '0')
	document.getElementById('minutes').textContent = minutes
		.toString()
		.padStart(2, '0')
	document.getElementById('seconds').textContent = seconds
		.toString()
		.padStart(2, '0')
}

// Обновляем таймер каждую секунду
updateCountdown() // Запускаем сразу
setInterval(updateCountdown, 1000)
