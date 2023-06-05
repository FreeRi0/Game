<template>
  <q-page class="flex flex-center">
    <div class="flex justify-between">
      <q-btn size="30px" class="q-ml-md" id="positionBtn">
        <i class="fa-solid fa-up-down-left-right" style="color: #2913ec"></i>
        <label class="q-pl-md cursor-pointer">Позиция</label>
      </q-btn>

      <q-btn size="30px" class="q-ml-md" id="rotateBtn">
        <i class="fa-solid fa-rotate" style="color: #2913ec"></i>
        <label class="q-pl-md cursor-pointer">Вращение</label>
      </q-btn>

      <q-btn size="30px" class="q-ml-md" id="scaleBtn">
        <i
          class="fa-solid fa-up-right-and-down-left-from-center"
          style="color: #2913ec"
        ></i>
        <label class="q-pl-md cursor-pointer">Размер</label>
      </q-btn>

      <q-btn size="30px" class="q-ml-md" id="boundBtn">
        <i class="fa-solid fa-arrows-to-dot" style="color: #2913ec"></i>
        <label class="q-pl-md cursor-pointer">Сетка</label>
      </q-btn>
    </div>
    <canvas ref="bjsCanvas"></canvas>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { createScene } from "../babylon/scene";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const bjsCanvas = ref(null);
    onMounted(() => {
      if (bjsCanvas.value) {
        createScene(bjsCanvas.value);
      }
    });

    return {
      bjsCanvas,
    };
  },
});
</script>

<style lang="scss">
canvas {
  width: 70%;
  height: 70%;
}
</style>
