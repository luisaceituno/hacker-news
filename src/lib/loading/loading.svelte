<div class="loader">
	<div class="bar1" />
	<div class="bar2" />
	<div class="bar3" />
	<div class="bar4" />
	<div class="bar5" />
	<div class="bar6" />
</div>

<style>
	.loader {
		display: flex;
		gap: 0.1rem;
		height: 1rem;
	}

	div div {
		height: 100%;
		width: 0.25rem;
		animation: delay 0.8s infinite ease-in-out;
	}

	.bar1 {
		background-color: #754fa0;
	}
	.bar2 {
		background-color: #09b7bf;
		animation-delay: -0.7s;
	}
	.bar3 {
		background-color: #90d36b;
		animation-delay: -0.6s;
	}
	.bar4 {
		background-color: #f2d40d;
		animation-delay: -0.5s;
	}
	.bar5 {
		background-color: #fcb12b;
		animation-delay: -0.4s;
	}
	.bar6 {
		background-color: #ed1b72;
		animation-delay: -0.3s;
	}

	@keyframes delay {
		0%,
		40%,
		100% {
			transform: scaleY(0.05);
		}
		20% {
			transform: scaleY(1);
		}
	}
</style>
