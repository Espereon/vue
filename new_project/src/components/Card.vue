<script setup>
defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function,
});
</script>

<template>
  <div>
    <div
      class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
    >
      <img
        v-if="onClickFavorite"
        @click="onClickFavorite"
        :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
        alt="Like"
        class="absolute top-8 left-8"
      />
      <img :src="imageUrl" alt="sneaker" />
      <p class="mt-2">{{ title }}</p>
      <div class="flex justify-between mt-5">
        <div class="flex flex-col">
          <span class="text-slate-400">Цена</span>
          <b>{{ price }} руб.</b>
        </div>
        <img
          v-if="onClickAdd"
          @click="onClickAdd"
          :src="!isAdded ? '/plus.svg' : '/checked.svg'"
          alt="Plus"
        />
      </div>
    </div>
  </div>
</template>
