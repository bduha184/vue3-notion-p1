<script setup>

defineProps({
  note:Object
})
</script>

<template>
  <div class="note"
    :class="{mouseover:note.mouseover}"
  >
    <div class="note-icon">
      <i class="fas fa-file-alt"></i>
    </div>
    <div class="note-name">{{ note.name }}</div>
  </div>
</template>

<style scoped lang="scss">
.note {
  margin: 10px 0;
  display: flex;
  align-items: center;
  padding: 5px;
  color: rgba(25, 23, 17, 0.6);
  &.mouseover {
    background-color: rgb(232, 231, 228);
    cursor: pointer;
  }
  .note-icon {
    margin-left: 10px;
  }
  .note-name {
    width: 100%;
    padding: 3px 10px;
  }
}
</style>
