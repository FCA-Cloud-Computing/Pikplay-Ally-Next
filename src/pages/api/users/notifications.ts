export default function handler(req, res) {
    const response = {
        "code": 200,
        "data": [
            {
                "nid": 125,
                "uid": 1,
                "detail": "7000 Pikcoins por tu compra de Audífonos APPLE AirPods Pro Blanco",
                "coins": 7000,
                "type_id": "PURCHASE",
                "status": 2,
                "created_at": "2022-04-11T20:33:30.000Z"
            }
        ]
    }
    res.status(200).json(response)
}
