<script>
  import { EMAIL_URL } from '../data/misc.js';
  import { sendGA } from '../utils';

  const contacts = [
    {
      name: 'github',
      link: 'https://github.com/imrickywong',

    },
    {
      name: 'zhihu',
      link: 'https://www.zhihu.com/people/rickywong/',
    },
    {
      name: 'e-mail',
      link: EMAIL_URL,
    },
  ];
</script>

<style>
  .item {
    display: inline-block;

    &:not(:last-child) {
      margin-right: $spacer-M;
    }
  }
</style>

<div class="{$$props.class}">
  <h4 class="sr-only" id="a11y_sn">Social Stuff</h4>
  <ul aria-labelledby="a11y_sn">
    {#each contacts as { name, link }, i}
      <li class="item">
        <a href={link} rel="noreferrer" target="_blank"
          class="u-link link"
          on:click={() => sendGA('send', 'event', 'click', 'contacts', name)}
        >{name}</a>
      </li>
    {/each}
  </ul>
</div>