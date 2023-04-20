<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container">
			<a class="navbar-brand" href="/">
				<img class="logo" src="map-marker.png" alt="Trip Planner logo" />
				Trip Planner
			</a>

			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item">
						<a class="nav-link" href="/">Trip Planner</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/my-trip">My Trip</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
	.navbar-brand{
		color: #700E57;
		font-weight: bold;
    	font-size: 1.4rem;
		transition: all .2s;

		&:hover{
			opacity: 0.7;
		}

		.logo {
			max-width: 55px;
			margin-right: 0.25rem;
		}
	}

	.nav-item{
		margin: 0 1rem;

		.nav-link{
			color: #191919;
			font-weight: 600;
			
			&:hover{
				text-decoration: underline;
			}
		}
	}
</style>
