let exulted = false

const disableEstadao = () => {
	const paywall = document.querySelector('#paywall-iframe-estadao')
	const html = document.querySelectorAll('html')[0]

	if (paywall) {
		paywall.style.display = "none"
		html.style.overflow = "initial"
		html.style.top = "0"
		html.style.position = "initial"

		exulted = true
		!exulted && clearInterval(runFunction)

		return
	}
	
	console.log('paywall not found')
}

if (window.location.href.indexOf('estadao') > 0) {
	const runFunction = setInterval(disableEstadao, 100)
}
