<template>
  <base-card>
    <template #header>   <!--  header 슬롯으로 이동 -->
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <template #default>   <!--  header 슬롯으로 이동 -->
      <p>{{ infoText }}</p> <!-- 자동으로 기본 슬롯으로 이동 -->
    </template>
  </base-card>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>