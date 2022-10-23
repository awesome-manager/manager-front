<template>
  <div>
    <slot name="label">
      <label v-if="label"> {{ label }} {{ required ? '*' : '' }} </label>
    </slot>
    <div
      class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate"
      :class="switchClass"
    >
      <div class="bootstrap-switch-container" @click="triggerToggle()">
      <span class="bootstrap-switch-handle-on ">
        <slot name="on"> {{ onText }} </slot>
      </span>
        <span class="bootstrap-switch-label"></span>
        <span class="bootstrap-switch-handle-off bootstrap-switch-default">
        <slot name="off"> {{ offText }} </slot>
      </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'switch',
  props: {
    required: Boolean,
    label: {
      type: String,
      description: 'Input label'
    },
    value: [Array, Boolean],
    onText: String,
    offText: String
  },
  computed: {
    switchClass() {
      let base = 'bootstrap-switch-';
      let state = this.model ? 'on' : 'off';
      return base + state;
    },
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    triggerToggle() {
      this.model = !this.model;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/sass/dashboard/custom/variables";

.bootstrap-switch {
  .bootstrap-switch-handle-on {
    color: $green;
  }
  .bootstrap-switch-handle-off {
    color: $red;
  }
  &-on .bootstrap-switch-label {
    background-color: $green;
  }
  &-off .bootstrap-switch-label {
    background-color: $red;
  }
}
label {
  display: block;
  margin-bottom: 1rem;
}
</style>
