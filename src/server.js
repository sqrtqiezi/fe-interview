const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')()

const app = new Koa();
app.use(bodyParser());

// cors
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  await next();
});

// xhr or view error
app.use(async (ctx, next) => {
  try {
      await next();
      ctx.body = {
          code: 200,
          message: ctx.msg || 'success',
          result: ctx.result || {}
      };
  } catch (err) {
      console.error(err.stack);

      ctx.body = {
          code: err.statusCode || err.status || 500,
          message: err.message || err.name || 'unknown error'
      };
  }
});

router['get']('/api/images', async (ctx, next) => {
    // mock images
    const images = [];
    for(let i = 0; i < 14; i++) {
      images.push({
        id: i,
        title: 'What is Lorem Ipsum?',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        src: `https://picsum.photos/640/480/?image=${i+10}`
      });
    }
    ctx.result = images;
});
app.use(router.routes());

// error handle
app.on('error', (err, ctx) => {
  console.error(err.stack);
});

app.listen(8080);
console.log('running on port:' + 8080);