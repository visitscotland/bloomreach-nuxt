<template>
	<footer class="footer fixed-bottom mt-auto py-3 bg-light">
        <div class="container">
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <span class="copyright">
                        &copy; {{ new Date().getFullYear() }} VisitScotland Trip Planner
                    </span>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
	.navbar-brand{
        display: block;
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

    .copyright{
        display: block;
    }
</style>
