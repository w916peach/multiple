<template>
    <div>test</div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
interface ListItem {
    id: string;
}
export default defineComponent({
  setup() {
    const list: ListItem[] = reactive<ListItem[]>([]);
    return {
      list
    };
  },
});
</script>
