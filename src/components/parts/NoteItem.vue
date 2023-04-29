<script setup>
defineProps({
  note: Object,
});

const emit = defineEmits({
  e: "onDeleteNote",
  e: "onEditNote",
});

const onDeleteNote = (e) => {
  emit("onDeleteNote", e);
};

const onEditNote = (e) => {
  emit("onEditNote", e);
};

const onEditEnd = (e) => {
  emit("onEditEnd",e);
}
</script>

<template>
  <div class="note" :class="{ mouseover: note.mouseover }">
    <template v-if="note.isEditing">
      <input
        v-model="note.name"
        class="transparent"
        @keypress.enter="onEditEnd(note)"
      />
    </template>
    <template v-else>
      <div class="note-icon">
        <i class="fas fa-file-alt"></i>
      </div>
      <div class="note-name">{{ note.name }}</div>
      <div v-show="note.mouseover" class="buttons">
        <div class="button-icon">
          <i class="fas fa-sitemap"></i>
        </div>
        <div class="button-icon">
          <i class="fas fa-plus-circle"></i>
        </div>
        <div class="button-icon" @click="onEditNote(note)">
          <i class="fas fa-edit"></i>
        </div>
        <div class="button-icon" @click="onDeleteNote(note)">
          <i class="fas fa-trash"></i>
        </div>
      </div>
    </template>
  </div>
</template>
<style scoped lang="scss">
.note {
  width: 100%;
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
  .buttons {
    display: flex;
    flex-direction: row;
    .button-icon {
      padding: 3px;
      margin-left: 3px;
      border-radius: 5px;
    }
  }
}
</style>
