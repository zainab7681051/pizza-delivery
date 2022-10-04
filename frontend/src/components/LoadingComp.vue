<template>
	<div class="spin">
	</div>
</template>

<script>
	
</script>

<style scoped>
	 @keyframes spinner {
        0% {
          transform: translate3d(-50%, -50%, 0) rotate(0deg);
        }
        100% {
          transform: translate3d(-50%, -50%, 0) rotate(360deg);
        }
      }
      .spin::before {
        animation: 1.5s linear infinite spinner;
        animation-play-state: inherit;
        border: solid 5px #cfd0d1;
        border-bottom-color: #cc709e;
        border-radius: 50%;
        content: "";
        height: 80px;
        width: 80px;
        position: relative;
        top: 10%;
        left: 10%;
        transform: translate3d(-50%, -50%, 0);
        will-change: transform;
        margin: 0 auto;
      }
</style>