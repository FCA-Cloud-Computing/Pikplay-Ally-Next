type Response = {
    code: number,
    data: {
        background_color: string,
        background_image: string
        city: string,
        coins: number
        created_at: string,
        email: string,
        exp: number
        identification_number: string | null,
        badge: string
        is_admin: boolean,
        is_certificated: boolean,
        league: string,
        login_code: number,
        name: string,
        phone: string,
        picture: string,
        token: string,
        uid: number,
    },
    message: string

}

export default function handler(req, res) {
    const response: Response = {
        "code": 200,
        "data": {
            background_color: "linear-gradient(45deg, #3095b359, #dc1919b5)",
            background_image: "/images/backgrounds/bg-gamer.jpg",
            city: "BAQ",
            coins: 2520,
            created_at: "2023-12-10T19:55:45.000Z",
            email: "nandoalvarado022@gmail.com",
            exp: 490,
            identification_number: null,
            badge: "liga-oro",
            is_admin: true,
            is_certificated: true,
            league: "oro",
            login_code: 1131,
            name: "El Avatar",
            phone: "573187414972",
            picture: "https://files.idyllic.app/files/static/308631?width=256&optimizer=image",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjU3MzE4NzQxNDk3MiIsImNvZGUiOjExMzEsImlhdCI6MTcyMDI3NDQ0MSwiZXhwIjoxNzIwMjc0NTAxfQ.14F8g_YRrfeXbzR6tWIGirhvwTNeImiU7hpaQ9th9nY",
            uid: 2,
        },
        "message": "Ingresó con exito"
    }
    res.status(200).json(response)
}
