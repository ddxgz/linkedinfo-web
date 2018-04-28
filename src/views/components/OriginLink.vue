<template>
    <b-button :href="originURL" size="sm" variant="outline-danger">
      {{ btnText }}
    </b-button>
</template>

<script>

export default {
  name: 'OriginLink',
  props: {
    originURL: String,
    btnText: {
      type: String,
      default: 'Original Link'
    }
  }
};
</script>
