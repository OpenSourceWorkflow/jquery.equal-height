jquery.equal-height
===================

![Project is deprecated!](https://cdn.rawgit.com/OpenSourceWorkflow/generator-kickstart/master/deprecation-warning.svg)

This project has been deprecated!

jQuery Plugin for getting and setting the min-height of given elements to the highest calculated value.

Usage
-----

```html
<div class="equal-container">
  <div class="equal">short</div>
  <div class="equal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto veritatis reiciendis repellendus autem aspernatur asperiores nihil unde? Laborum cumque inventore nemo eum ab debitis adipisci a obcaecati nesciunt commodi doloribus.</div>
  <div class="equal">short</div>
</div> <!-- equal-container -->
```

```javascript
$('.equal-container').each(function() {
  $(this).find('.equal').equalheight();
});
```

Installation
------------

```shell
bower install jquery.equal-height
```
