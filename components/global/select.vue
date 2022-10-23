<template>
  <div class="form-group">
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
          :options="preparedOptions"
          :placeholder="placeholder"
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
import find from "lodash/find";

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
    placeholder: {
      type: String,
      default: 'Выберите вариант'
    },
    options: {
      type: Array,
      default: [],
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
      value: null
    }
  },
  computed: {
    preparedOptions() {
      return this.options.map(option => {
        return typeof option === 'object' ? option.title : option
      });
    },
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
        input: this.onInput
      };
    }
  },
  methods: {
    onInput(val) {
      this.value = val;
      this.$emit('input', this.options.includes(val) ? val : find(this.options, ['title', val]));
    }
  },
  components: {
    Multiselect
  }
}
</script>
