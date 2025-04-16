<script setup>
import Card from "./Card.vue";
import { inject } from "vue";
defineProps({
  items: Array,
});

const onClickAdd = () => {
  alert("Добавить");
};

const addToFavorite = inject("addToFavorite");

const onClickFavorite = () => {
  const obj = {
    ...props,
    parentId: props.id,
  };
  addToFavorite(obj);
};
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :image-url="item.imageUrl"
      :price="item.price"
      :onClickAdd="onClickAdd"
      :onClickFavorite="() => addToFavorite(item)"
      :isFavorite="item.isFavorite"
    />
  </div>
</template>
