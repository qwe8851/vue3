<template>
  <base-card>
    <template v-slot:header>   <!--  header 슬롯으로 이동 -->
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <template v-slot:default>   <!--  header 슬롯으로 이동 -->
      <p>{{ infoText }}</p> <!-- 자동으로 기본 슬롯으로 이동 -->
    </template>
  </base-card>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
/* section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
} */

section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>