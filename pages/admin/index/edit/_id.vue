<template>
  <div>
    <Shadow v-show="true" />
    <context title="Edit Department">
      <row-form>
        <label-form title="Nama Department" />
        <input-text v-model="nama" placeholder="Masukan Nama Department" />
      </row-form>
      <information-form v-show="information">{{
        titleInformation
      }}</information-form>
      <transition name="slide-page" mode="out-in">
        <div
          :key="1"
          v-if="!confirmDelete"
          class="flex justify-between items-center pt-2"
        >
          <button-delete @press="showConfirmDelete" class="mr-10" />
          <div class="flex justify-end">
            <button-cancel>Cancel</button-cancel>
            <button-confirm v-on:press="save">Update</button-confirm>
          </div>
        </div>
        <div
          :key="2"
          v-else
          class="items-center flex-col justify-center w-full"
        >
          <label
            class="
              text-center text-gray-500 text-sm text-lucy
              p-2
              font-bold
              block
            "
            >Hapus Department Dan Seluruh Data Pekerja ?</label
          >
          <div class="flex justify-center items-center">
            <label
              @click="cancelConfirmDelete"
              class="
                font-bold
                text-gray-500
                mr-3
                text-sm
                hover:text-gray-700
                cursor-pointer
              "
              >Cancel</label
            >
            <button-confirm v-on:press="deleteData">Delete</button-confirm>
          </div>
        </div>
      </transition>
    </context>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'
import ButtonCancel from '~/components/Form/ButtonCancel.vue'
import ButtonConfirm from '~/components/Form/ButtonConfirm.vue'
import ButtonDelete from '~/components/Form/ButtonDelete.vue'
import InformationForm from '~/components/Form/InformationForm.vue'
import InputText from '~/components/Form/InputText.vue'
import LabelForm from '~/components/Form/LabelForm.vue'
import RowForm from '~/components/Form/RowForm.vue'
import Context from '~/components/modal/Context.vue'
import Shadow from '~/components/modal/Shadow.vue'
export default {
  components: {
    Shadow,
    InputText,
    LabelForm,
    RowForm,
    Context,
    InformationForm,
    ButtonDelete,
    ButtonCancel,
    ButtonConfirm,
  },
  data() {
    return {
      nama: 'asdds',
      deductible: '',
      information: false,
      titleInformation: '',

      confirmDelete: false,
    }
  },
  computed: {
    ...mapGetters('department', ['detail']),
  },
  mounted() {
    const data = this.detail(this.$route.params.id)
    console.log(data)
    this.nama = data.name
  },
  methods: {
    ...mapActions('department', ['delete', 'update']),
    ...mapMutations('button', ['toogle']),
    showConfirmDelete() {
      this.confirmDelete = true
    },
    cancelConfirmDelete() {
      this.confirmDelete = false
    },
    async deleteData() {
      const [result, error] = await this.delete(this.$route.params.id)
      if (result) {
        this.$router.push('/admin')
      } else {
        this.titleInformation = error
        this.information = true
      }
      this.toogle(true)
    },
    async save() {
      const data = {
        name: this.nama,
      }

      const [result, error] = await this.update({
        id: this.$route.params.id,
        data,
      })
      if (result) {
        this.$router.push('/admin')
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
