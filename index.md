---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Utapoi"
  text: Brings karaoke straight to your screen.
  actions:
    - theme: brand
      text: Support
      link: https://github.com/Utapoi/Karaoke.Web
    - theme: alt
      text: GitHub
      link: https://github.com/Utapoi


features:
  - title: Karaoke Web
    icon: 🎤
    details: The best japanese karaoke app.
    link: https://karaoke.utapoi.com
  - title: Karaoke Desktop (In Development)
    icon: 🖥️
    details: The desktop version of our karaoke app.

---

<script setup lang="ts">
  import { VPTeamMembers, VPTeamPage, VPTeamPageSection } from 'vitepress/theme'

  const members = [
  {
    avatar: 'https://www.github.com/mikyan0207.png',
    name: 'Mikyan',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/mikyan0207' },
    ]
  },
  {
    avatar: 'https://www.github.com/tarekelb.png',
    name: 'Tarek Elb',
    title: 'Full-Stack Developer',
    links: [
      { icon: 'github', link: 'https://github.com/tarekelb' },
    ]
  },
]
</script>

<br><br>

<VPTeamPage>
  <VPTeamPageSection>
    <template #title>
      Team
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="members" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #f38ba8, #b4befe);
}

@media screen and (min-width: 1024px) {
  .VPHomeHero .container .main .text {
    font-size: 34px;
    line-height: 42px;
  }
}


</style>