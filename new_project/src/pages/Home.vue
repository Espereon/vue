<script setup>
import CardList from "../components/CardList.vue";
import debounce from "lodash.debounce";
import { inject, reactive, watch, ref, onMounted } from "vue";
import axios from "axios";

const filters = reactive({
  searchQuery: "",
  sortBy: "title",
});
const items = ref([]);
const { addToCart, removeFromCart, cart } = inject("cart");

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value;
};

const onChangeSearch = debounce((event) => {
  filters.searchQuery = event.target.value;
}, 1000);

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id,
      };
      item.isFavorite = true;
      const { data } = await axios.post(
        `https://66cc62f5ea4e5b9f.mokky.dev/favorites`,
        obj
      );
      item.favoriteId = data.id;
      console.log(item.favoriteId);
    } else {
      item.isFavorite = false;
      await axios.delete(
        `https://66cc62f5ea4e5b9f.mokky.dev/favorites/${item.favoriteId}`
      );
      item.favoriteId = null;
    }
  } catch (err) {
    console.log(err);
  }
};

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item);
  } else {
    removeFromCart(item);
  }
};

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(
      `https://66cc62f5ea4e5b9f.mokky.dev/favorites`
    );
    items.value = items.value.map((item) => {
      const favorite = favorites.find(
        (favorite) => favorite.item_id === item.id
      );

      if (!favorite) {
        return item;
      }
      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id,
      };
    });
  } catch (error) {
    console.log(error);
  }
};

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    };
    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`;
    }

    const { data } = await axios.get(
      `https://66cc62f5ea4e5b9f.mokky.dev/items`,
      { params }
    );
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false,
    }));
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  const localCart = localStorage.getItem("cart");
  cart.value = localCart ? JSON.parse(localCart) : [];

  await fetchItems();
  await fetchFavorites();
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id),
  }));
});

watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false,
  }));
});

watch(filters, fetchItems);
</script>

<template>
  <div>
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>
      <div class="flex gap-4">
        <select
          @change="onChangeSelect"
          class="py-2 px-3 border border-gray-100 rounded-md"
        >
          <option value="name">По названию</option>
          <option value="price">По цене (дешевые)</option>
          <option value="-price">По цене (дорогие)</option>
        </select>
        <div class="relative">
          <img class="absolute left-4 top-3" src="/search.svg" />
          <input
            @input="onChangeSearch"
            class="border border-gray-100 rounded-md py-2 pl-11 pr-4 focus:border-gray-400"
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>
    </div>
    <div class="mt-10">
      <CardList
        :items="items"
        @add-to-favorite="addToFavorite"
        @add-to-cart="onClickAddPlus"
      />
    </div>
  </div>
</template>
