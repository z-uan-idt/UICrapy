<template>
  <div class="loading-screen">
    <div class="loading-content">
      <div class="loader">
        <!-- Hàng 1 -->
        <div class="cell d-0"></div>
        <div class="empty"></div>
        <div class="cell d-1"></div>
        <div class="empty"></div>

        <!-- Hàng 2 -->
        <div class="empty"></div>
        <div class="cell d-2"></div>
        <div class="empty"></div>
        <div class="cell d-3"></div>

        <!-- Hàng 3 -->
        <div class="cell d-3"></div>
        <div class="empty"></div>
        <div class="cell d-2"></div>
        <div class="empty"></div>

        <!-- Hàng 4 -->
        <div class="empty"></div>
        <div class="cell d-1"></div>
        <div class="empty"></div>
        <div class="cell d-0"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 24, 39, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.3s ease-out;
}

.loading-screen.fade-out {
  opacity: 0;
  pointer-events: none;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.loader {
  --cell-size: 25px;
  --cell-spacing: 3px;
  --cells: 4;
  display: grid;
  grid-template-columns: repeat(4, var(--cell-size));
  grid-template-rows: repeat(4, var(--cell-size));
  gap: var(--cell-spacing);
}

.cell {
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 4px;
  animation: 1.5s ripple ease infinite;
}

.empty {
  background: transparent;
}

.cell.d-1 {
  animation-delay: 100ms;
}

.cell.d-2 {
  animation-delay: 200ms;
}

.cell.d-3 {
  animation-delay: 300ms;
}

.cell {
  --cell-color: #818CF8;
}

.loading-text {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #818CF8;
  font-weight: 500;
}

@keyframes ripple {
  0% {
    background-color: transparent;
  }

  30% {
    background-color: var(--cell-color);
  }

  60% {
    background-color: transparent;
  }

  100% {
    background-color: transparent;
  }
}
</style>
