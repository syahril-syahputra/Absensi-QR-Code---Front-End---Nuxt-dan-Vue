<template>
  <div>
    <Shadow v-show="true" />
    <context title="Tambah Pekerja Baru" :max="false">
      <row-form>
        <label-form title="PN" />
        <input-text v-model="pn" placeholder="Masukan PN Pekerja" />
      </row-form>
      <row-form>
        <label-form title="Nama" />
        <input-text v-model="nama" placeholder="Masukan Nama Pekerja" />
      </row-form>
      <row-form>
        <label-form title="Username" />
        <input-text v-model="username" placeholder="Masukan Username Login" />
      </row-form>
      <row-form>
        <label-form title="Password" />
        <input-text v-model="password" placeholder="Masukan Password Login" />
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
      pn: '',
      username: '',
      password: '',
      information: false,
    }
  },
  methods: {
    ...mapMutations('button', ['toogle']),
    ...mapActions('employe', ['add']),
    async save() {
      this.information = false

      const data = {
        nama: this.nama,
        pn: this.pn,
        username: this.username,
        password: this.password,
        department_id: this.$route.params.department,
      }
      const [result, error] = await this.add(data)
      if (result) {
        this.$router.push('/admin/' + this.$route.params.department)
      } else {
        this.titleInformation = error
        this.information = true
      }

      this.toogle(true)
    },
  },
}
</script>

<style>
</style>
