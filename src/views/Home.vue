<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hello-world v-if="toggle" msg="Welcome to Your Vue.js + TypeScript App"></hello-world>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    'hello-world': HelloWorld,
  },
})
export default class Home extends Vue {
  @Prop({ default: false }) private toggle!: boolean;

  public togglePost() {
		this.toggle = !this.toggle;
  }
  
  get postToggle() {
    return this.toggle;
  }
}
</script>
