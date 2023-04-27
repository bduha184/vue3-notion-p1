<script setup>
import NoteItem from '@/components/parts/NoteItem.vue'
import { ref } from 'vue'

const noteList = ref([]);

const onClickButtonAdd = () => {
    noteList.value.push({
        id:new Date().getDate(),
        name:'新規ノート',
    })
}

</script>
<template>
  <div class="main-page">
    <div class="left-menu">
      <!-- ノートリスト -->
      <NoteItem
        v-for="note in noteList"
        :key="note.id"
        :note="note"
      />
      <!-- ノート追加ボタン -->
      <button class="transparent" @click="onClickButtonAdd">
        <i class="fas fa-plus-square"></i>ノートを追加
      </button>
    </div>
    <div class="right-view">右ビュー</div>
  </div>
</template>
<style scoped lang="scss">
.main-page {
  display: flex;
  height: calc(100vh - 60px);
  .left-menu {
    width: 350px;
    background-color: #f7f6f3;
    .note {
      margin: 10px 0;
      display: flex;
      align-items: center;
      padding: 5px;
      color: rgba(25, 23, 17, 0.6);
      .note-icon {
        margin-left: 10px;
      }
      .note-name {
        width: 100%;
        padding: 3px 10px;
      }
    }
  }
  .right-view {
    flex-grow: 1;
    padding: 10px;
  }
}
</style>
