<template>
  <div>
    <Shadow v-show="true" />
    <context title="Buat Department Baru" :max="false">
      <row-form>
        <label-form title="Nama Department" />
        <input-text v-model="nama" placeholder="Masukan Nama Department" />
      </row-form>
      <information-form v-show="information">{{
        titleInformation
      }}</information-form>
      <div class="flex justify-end pt-2">
        <button-cancel>Cancel</button-cancel>
        <button-confirm v-on:press="save">Confirm</button-confirm>
      </div>
    </context>
  </div>
</template>

<script>
import ButtonCancel from '~/components/Form/ButtonCancel.vue'
import ButtonConfirm from '~/components/Form/ButtonConfirm.vue'
import InformationForm from '~/components/Form/InformationForm.vue'
import InputText from '~/components/Form/InputText.vue'
import LabelForm from '~/components/Form/LabelForm.vue'
import RowForm from '~/components/Form/RowForm.vue'
import Context from '~/components/modal/Context.vue'
import Shadow from '~/components/modal/Shadow.vue'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  components: {
    Context,
    Shadow,
    RowForm,
    LabelForm,
    InputText,
    ButtonCancel,
    ButtonConfirm,
    InformationForm,
  },
  data() {
    return {
      titleInformation: '',
      nama: '',
      information: false,
    }
  },
  methods: {
    ...mapMutations('button', ['toogle']),
    ...mapActions('department', ['add']),
    async save() {
      this.information = false
      if (this.nama === '') {
        this.titleInformation = 'Masukan Nama Department Terlebih Dahulu!!!'
        this.information = true

        this.toogle(true)
      } else {
        const data = {
          name: this.nama,
        }
        const [result, error] = await this.add(data)
        if (result) {
          this.$router.push('/admin')
        } else {
          this.titleInformation = error
          this.information = true
        }

        this.toogle(true)
      }
    },
  },
}
</script>

<style>
</style>
