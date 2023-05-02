<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
</head>

<body>
  <style>{{styles}}</style>
  <div class="wy">{{content}}</div>
</body>

<script>

  window.onload = () => {
    const targetAnchor = window.location.hash;
    if(!targetAnchor) return
    const targetElement = document.querySelector(`a[name="${targetAnchor.slice(1)}"]`);
    requestAnimationFrame(() => {
      targetElement && targetElement.scrollIntoView();   
    })
  }
</script>
</html>