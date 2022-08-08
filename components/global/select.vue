<template>
  <div>
    <slot name="label">
      <label v-if="label"> {{ label }} {{ required ? '*' : '' }} </label>
    </slot>
    <div class="mb-0" :class="{'input-group': hasIcon}">
      <slot name="addonLeft">
        <span v-if="addonLeftIcon" class="input-group-prepend">
          <div class="input-group-text"><i :class="addonLeftIcon"></i></div>
        </span>
      </slot>
      <slot>
        <multiselect
          :value="value"
          :options="options"
          v-on="listeners"
          class="based-multiselect"
          aria-describedby="addon-right addon-left"
          :searchable="searchable"
        >
        </multiselect>
      </slot>
      <slot name="addonRight">
        <span v-if="addonRightIcon" class="input-group-append">
          <div class="input-group-text"><i :class="addonRightIcon"></i></div>
        </span>
      </slot>
    </div>

    <slot name="error" v-if="error || $slots.error">
      <label class="error">{{ error }}</label>
    </slot>
    <slot name="helperText"></slot>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";

export default {
  name: 'base-select',
  props: {
    label: {
      type: String,
      default: 'Select'
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: null
    },
    options: {
      type: [Array, Object],
      default: () => ([])
    },
    searchable: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: null
    },
    addonRightIcon: {
      type: String,
      default: null
    },
    addonLeftIcon: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      focused: false,
      touched: false
    };
  },
  computed: {
    hasIcon() {
      return this.hasLeftAddon || this.hasRightAddon
    },
    hasLeftAddon() {
      const { addonLeft } = this.$slots;
      return (
        addonLeft !== undefined ||
        this.addonLeftIcon !== undefined
      );
    },
    hasRightAddon() {
      const { addonRight } = this.$slots;
      return (
        addonRight !== undefined ||
        this.addonRightIcon !== undefined
      );
    },
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        blur: this.onBlur,
        focus: this.onFocus
      };
    }
  },
  methods: {
    onInput(val) {
      if (!this.touched) {
        this.touched = true;
      }
      this.$emit('input', val);
    },
    onFocus(evt) {
      this.focused = true;
      this.$emit('focus', evt)
    },
    onBlur(evt) {
      this.focused = false;
      this.$emit('blur', evt)
    }
  },
  components: {
    Multiselect
  }
}
</script>
