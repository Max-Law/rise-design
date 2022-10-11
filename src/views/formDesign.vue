<template>
  <div id="example-formDesign" v-loading="loading">
    <bm-form-design
      :headers="token"
      :dbData="dbData"
      :otherWidet="otherWidet"
      @handlerUploadJson="handlerUploadJson"
      @goBack="goBack"
    />
  </div>
</template>

<script>
import otherWidet from '../components/otherWidet';

export default {
  name: 'exampleFormDesign',
  data() {
    return {
      loading: false,
      dbData: {},
      //项目自有组件配置
      otherWidet: otherWidet,
    };
  },
  computed: {
    token() {
      return {
        Authorization: 'Bearer ',
      };
    },
    formId() {
      return this.$route.query.formId;
    },
  },
  mounted() {},
  methods: {
    handlerUploadJson() {},
    goBack() {},
  },
};
</script>
