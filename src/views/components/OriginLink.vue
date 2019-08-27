<template>
  <div>
    <b-button :href="originURL" size="sm" variant="outline-danger"> 
      <i class="fas fa-external-link-alt"></i>
      {{ btnText }}
    </b-button>


    <!-- <a :href="originURL" size="sm" variant="outline-danger">{{ btnText }}</a> -->

    <!-- <a :href="originURL">{{originHostname}}</a> -->

    <!-- <b-badge :href="originURL" variant="danger">
      {{ btnText }}
    </b-badge> -->
  </div>
</template>

<script>

export default {
  name: 'OriginLink',
  props: {
    originURL: String,
    btnText: {
      type: String,
      default: 'Link'
    }
  },
  computed: {
    originHostname() {
      // return this.extractRootDomain(this.originURL)
      return this.extractHostname(this.originURL)
    }
  },
  methods: {
    extractHostname(url) {
      var hostname;
    // find & remove protocol (http, ftp, etc.) and get hostname

      if (url.indexOf('://') > -1) {
        hostname = url.split('/')[2];
      } else {
        hostname = url.split('/')[0];
      }

    // find & remove port number
      hostname = hostname.split(':')[0];
    // find & remove "?"
      hostname = hostname.split('?')[0];

      return hostname;
    },

// To address those who want the "root domain," use this function:
    extractRootDomain(url) {
      var domain = this.extractHostname(url)
      var splitArr = domain.split('.')
      var arrLen = splitArr.length;

    // extracting the root domain here
    // if there is a subdomain
      if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        // check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
        if (splitArr[arrLen - 2].length === 2 && splitArr[arrLen - 1].length === 2) {
            // this is using a ccTLD
          domain = splitArr[arrLen - 3] + '.' + domain;
        }
      }
      return domain;
    }
  }
};
</script>
