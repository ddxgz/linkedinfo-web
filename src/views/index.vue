<template>
  <div>
    <navbar></navbar>
    <b-container>
        <b-row>
            <b-col cols="12" md="8">
                <info-list></info-list>
            </b-col>
            <b-col cols="6" md="4">
                <info-list></info-list>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import InfoList from '@/components/InfoList'

export default {
  name: 'layout',
  components: {
    Navbar,
    InfoList
  }
}
</script>