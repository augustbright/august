import {Router} from 'express';

const apiRouter = Router({});
apiRouter.get('/user-info', (req, res) => {
    setTimeout(() => {
        res.json({
            firstname: 'August'
        });    
    }, 1000);
});

export { apiRouter };