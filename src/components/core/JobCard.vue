<template>
  <div>
    <b-card class="card mb-2">
      <b-row>
        <b-col cols="1" class="pr-0">
          <img
            :src="job?.business?.business_image ?? 'images/logo 1.png'"
            class="logo"
            width="100%"
            alt=""
          />
        </b-col>
        <b-col cols="9">
          <p style="font-size: 24px">{{ job?.title }}</p>
          <div class="d-flex my-1">
            <img src="images/building-icon.png" height="20" alt="" />
            <p class="mx-2 info-text">{{ job?.business?.name }}</p>
            <img src="images/link-icon.png" height="20" alt="" />
          </div>
          <div class="d-flex">
            <img src="images/location-icon.png" height="20" alt="" />
            <p class="mx-2 info-text">
              {{ job?.business_addresses[0]?.city?.title }}
            </p>
          </div>
        </b-col>
        <b-col cols="2">
          <div class="d-flex flex-column align-items-end justify-content-end">
            <p style="font-size: 14px; color: rgba(48, 209, 55, 1)">
              {{ job?.status?.status.toUpperCase() }}
            </p>
            <img
              src="images/edit-icon.png"
              height="20"
              width="20"
              class="mt-1"
              alt=""
            />
          </div>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col cols="6">
          <div class="d-flex">
            <img src="images/applicants-icon.png" height="20" alt="" />
            <p class="mx-2 info-text">
              {{ job?.jobs_applied?.length + 1 || 0 }} Apllications received
            </p>
            <img src="images/link-icon.png" height="20" alt="" />
          </div>
        </b-col>
        <b-col cols="6">
          <div class="d-flex align-items-end justify-content-end">
            <div class="">
              <p class="mx-4 info-text">Disable</p>
            </div>
            <b-form-checkbox size="lg" class="pt-0" name="check-button" switch>
            </b-form-checkbox>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="6">
          <div class="d-flex align-items-center">
            <img src="images/account-icon.png" height="20" alt="" />
            <p style="font-size: 12px" class="mx-2 info-text">
              Posted by M.Ahmad
            </p>
            <p style="font-size: 12px" class="text-primary">12h ago</p>
          </div>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-end">
            <base-btn
              style="border: 0"
              class="mx-2 text-primary btn-primary-light"
            >
              View Analytics
            </base-btn>
            <base-btn> Campaign now </base-btn>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: {
    job: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  max-width: 854px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.logo {
  border: 2px solid rgba(132, 119, 250, 1);
  border-radius: 10px;
  max-height: 60px;
  padding: 4px;
}
.info-text {
  color: rgba(120, 119, 119, 1);
}
</style>
