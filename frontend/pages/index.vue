<template>
  <div>
    <fullpage-header class="bg-black">
      <ClientOnly>
        <animation-background
          :background-images="backgroundImages"
          :duration="{ enter: 1200, leave: 2000, stay: 8000, transfer: 200 }"
        />
      </ClientOnly>
      <div class="absolute top-1/2 -translate-y-1/2 w-full h-1/2 text-white">
        <div class="center-container w-3/5 flex">
          <div class="h-full w-1/2 font-sans">
            <h1 class="text-7xl font-bold">NCU+</h1>
            <h3 class="mt-5 text-2xl">中央大學智慧校園系統</h3>
            <h4 class="mt-3 text-base">
              A new hope at the place where Nobody Care U.
            </h4>
          </div>
          <div class="h-full w-1/2" />
        </div>
      </div>
    </fullpage-header>
    <section class="h-screen w-full bg-white">
      <div
        class="center-container w-full flex flex-col space-y-12 items-center"
      >
        <h1 class="mt-20 text-4xl font-bold text-center">Features</h1>
        <div class="w-full overflow-x-scroll md:scrollbar-hide">
          <div class="w-fit mx-auto flex justify-center flex-nowrap">
            <!-- add more link here -->
            <NuxtLink class="w-72" to="/courses">
              <div
                class="w-full flex flex-col space-y-8 items-center justify-center hover:bg-gray-200"
              >
                <img src="@/assets/features_chart.png" class="w-44 h-44" />
                <div class="flex flex-col space-y-2 text-left px-8 pb-4">
                  <h3 class="text-center font-bold text-xl">大量選課心得</h3>
                  <p class="text-left">
                    是否厭倦在CTRL+F社團中不斷下拉載入尋找課程心得了？
                    <br />
                    NCU+能夠藉由宛如選課系統般的查找方式，尋找到目標課程，並一次觀看所有心得與考古！
                    <br />
                    現在不用再CTRL+F了，在網站中一次找出所有你想要的!
                  </p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="h-96 w-full bg-slate-800 flex items-center">
      <div class="h-4/5 w-full">
        <div class="center-container w-3/5 text-white text-center">
          <h1 class="text-2xl">About NCU+</h1>
          <p class="mt-5">
            NCU+是中大非官方的資訊網站
            <br />
            發想於排課過程中查找資訊的困難，因而期望有彙整資訊的網頁。
            <br />
            未來會繼續強化網站功能，以期能建立真正的智慧校園。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable */
// @ts-ignore
import bgImg1 from "~/assets/background/中大湖.png";
// @ts-ignore
import bgImg2 from "~/assets/background/飛碟.png";
// @ts-ignore
import bgImg3 from "~/assets/background/總圖.jpg";
// @ts-ignore
import bgImg4 from "~/assets/background/男十三.jpg";
// @ts-ignore
import bgImg5 from "~/assets/background/操場.jpg";
// @ts-ignore
import bgImg6 from "~/assets/background/櫻花.png";
/* eslint-enable */
import { MetaBuilder } from "~~/helpers/MetaBuilder";

const backgroundImages = [bgImg1, bgImg2, bgImg3, bgImg4, bgImg5, bgImg6].sort(
  () => Math.random() - 0.5,
);

useHead({
  meta: new MetaBuilder()
    .addDescription(
      "NCU+是中大非官方的資訊網站，發想於排課過程中查找資訊的困難，因而期望有彙整資訊的網頁。未來會繼續強化網站功能，以期能建立真正的智慧校園。",
    )
    .addImage(bgImg5)
    .addTwitterCard("summary_large_image")
    .build(),
});
</script>
