
module.exports = connectSockets

function connectSockets(io) {
    io.on('connection', socket => {
        socket.on('farm newOrder', order=>{
            io.to(socket.myId).emit('farm addOrder', order)
        })
        socket.on('react', response=>{

            io.to(socket.shopperId).emit('react order', response)
        })
        socket.on('shopper id', shopperId=>{
            if (socket.shopperId) {
                socket.leave(socket.shopperId)
            }
            socket.join(shopperId)
            socket.shopperId = shopperId;
        })

        socket.on('farm id', shopId=>{
            if (socket.myId) {

                socket.leave(socket.myId)
            }
            socket.join(shopId)
            socket.myId = shopId;
        })
    })
}