import React from 'react'
import "./ProDetail.css"
function ProDetail() {
  return (
    <div className='ProDetail'>
      <div className="img-area">
  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESERIQEhERERESEREUEhIREREREhIRGBgZGRgYGBgcIy4lHB4rHxgYJjgmKy8xNTU1GiU7QDszPy40NTEBDAwMEA8QGhISGDEkJCE0MTY6NDQxNDE0NDE0MTQxNTQ0MTE2MTQxNDQxMTQxMTQ0MTQ0NDQ0NDQ0NDQxMTE0NP/AABEIAQMAwgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwECBgQFB//EAEIQAAIBAgMEBwQGCQQCAwAAAAECAAMRBBIhBTFBUQYTImFxgZEyobHBI0JSYsLRBxQzcoKisuHwc4OS8SREFTRD/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEDAgT/xAAjEQEBAAIBBAEFAQAAAAAAAAAAAQIRAxMhMUESIjJRYXEE/9oADAMBAAIRAxEAPwDUwhJnaiEIQCRUfKpbkCZMo4zMqczc/uj+9pMrqbXGbsjr2bSyUxfedT4wxNewjXcATNbbxrkijT1qVDlUcuZPcBczzyPVaVhh+s4rOdaWHOnJqp3eg18SJ7FPFKLrmF1JBF7HSLweHShSCA6ICWY72bezHxMzjPnJfW7EknfvmvS3NMJyWZWteuKFxc6W33nWmMp/aX1Ewb2HGKNu/wBJOh+3XW/T6E206K76lMfxrEVNuUB/+inwufhMGLcjL5wOQ8SJehPy561/DUYnb1PhmbwFvjM9tfbBZSEQ/Gc71d27U8Axv4WE4sVUN2XtmxVTYBQCxsBcnfrL0cYdbJp+j1frMLTYgBhnVgOBDHf5WPnPYwe8mZDoTigy10FxldX1N7hiyX/kmxwY7N+8+6c8n26Xi75bU2g2hmfwK3eo3LQeZufgJ7O1KgCmeTs8dgt9pifl8plxz6mvLdYnsYp4xjEuZ6nkLYxTGXcxbSKi8JWEDVSZEmUEIQgTLYNd9Q/W3dyjd8zKBMxCfaNj4cZfG11pgjcAP+plyX024sfbi2rj1pozE7py7GwbC+IqD6WoNAd9NN4XxO8+Q4RGEpnE1Otb9lTbsA7qlQcfAfHwM9yMMfacmXqPL23XGUUhvbVu5b6ep+E8QILjfaxvYkfCPxLE1ahPF39AbD3ASi75vGLlKAnXv0BIJ8TK9WDv8ySYxtIs3bThKihCk2UDvawv4DlHothu1+EslG0uBaUc2Ibq0Lm5ykE8yL2Pxnj46sR2b/syXqNwNZgSF/hFz6T1tqVctGq3EU2tfmRYe8zNpXVlpr9VM1WoeZ4X8r+s4qtJ0Fp2bE81Wgh8RnZve03mCFkvzvMH0GJyYhj7TFHPic836aIB3CYct8N+GeXi7crWQ98Rh0y00H3RfxOplNqnPVp0+bdrwGvwj2jinmnNl4hbmJcy7mLaasC2MUxjGimMKiEpeEDXSRCEoIQkM6IhqOewt/dOcsvjNusMbldQzD+1f08J4W1kqVsQtAMQrAtUI3hBv/LznorjlNJ8SGBpgEqQdLDT4iedsSq1arUxBFlCCmvebhmPuHrMcfqy7vTnJhj2ezTRUUIoCqoAAG4AQqNZWPJSfQS05Nqvlov3gL6kA+689Dxs82uu/jLNuv3SlM8DJqNYWnaEhbx9NBFrG9YLSiKhtpEs0l2JlcnZLEgW4G9zIPE6TYgjDsB9d0X35vwzOYKpmUqdx0PgDe3pPY6WVvo6aDeahb0Uj8U8jZ1PsM29i9r91gZnfKxvegdMuai8+rJ8AWM3WIWy8rCZP9HdKy1XI0JRQe8XJ+Imtxz+0OGWY5969PHNY/1mVS9ZnP1Vt5k/kPfGtGOoDNbn8ABFMZpjNYxjnd5UpoljGuYlp05LaKYxjRTQKwkQgbCTIkiUE8bpPiimF7IYk1MpygkatY3t/mk9mcePptlOVDURr9ZTVsrHky98z5MbZ2bcOUxy7+3l1sKRhcPhQ/aqrTW3JQAztbyJnuYXDpTRaaCyqLD8z3nfM5hx2n6mqKb0zYdbTIqBcljoRcjUd1xPe2eW6sZnNQg+0VK30G6/+XvOeOzw7/0S9rvs6p5W3qtlpp9pifID+89WZzbtTNVy/YUDzOp+Im0eVxPWA4Tz6uNsbGOqmwnl4ilnnSO5MaDxE7EqXEyNSnUptoSy33d093AVCwBiUekXtKvWc6F2t4kyGlWEoznSwWNHwqfgnHsikzqqKLs9XKo7yFEd0qPbpj7jH1P9p7H6O8OGd3K5urpuy8lYkLf0B98yyut13hj8spH0zYmAShRSmm5V1J3sx3sfEyMfU7OnI3+XzjaVWyC+8gTixbAq2vCefb2/HTgvfv1PximlkFhbvPxMo09GPiPFn91KeKaMaKaVyW0U0Y0U0KrCEIGvEmEmUEIQhAyg7wD4i8mRCBMye0GJqVCftt8bTWTG457u55ux98uI4a2sUqWjTKudJ0jlxJXW+/cPEzo2agCZRuBPxvOV3BPmT6f9zp2a1w3j8pB2sZVmgxlHMoyvSZ/ph3Ul9czn5zX/AKPkK0qgtbOlIE/eYvYfGYbbzFsRUXllUf8AEfO82HR6s6uqKWKglgii4LhSASO4THKbla8WUxylraO7debN2UpM51+tcBdPNvSeDiMXUNJWL2NWqwH7iki/h2SfSPw4rlq2ZCrVMiqxKhRTUEgnU63Y6d0ZhsBlWmtTK+RERBa4WwNzrvJvMpja9OfLjPZ1JSEUHflF7778ZV45oh5u8du7stopoxopoQtopowxbQqkIQgbGEiTKJhIvJhBCELwIY21mIrG821U9lv3W+ExNSXEIJi25S7CJqjsnUrzI3gSo5HVRmtx9pvCN2RUu1QcBlt75zVyLW3KOHFjOzY+FYUjiDoKlQovLKg1I8yR5GT2O5zFO0s5ijKMfWOfFN31z6BvyE3HRdPp78kc/L5zC4Dt4hTzZ29QTPoHRVfpHPJCPVl/KcRWnaLaMaKaUUaJeMYxTQFNFtLtKGRSmEU0aximgUhCEDXy0gSZUTCEIBJkSYFK/sP+63wmJrGbTFG1OoeVN/6TMPXMsCnbS+4Tlqtffx9le7izeW4RtRu654A7vE90R3773OY72O6/cNZUceNYBSW3C/ie4fMzZYvCGlgsLTIsyZc45OyszD1vPC2Jgkq4umtTWwL5fuprc8hew85r+kX7Ff8AUX+lpz7Vl2nNiHCq7fZVj6CdDieZtZwKNS27IVvzzdn5zqo8LYCXrDuRj7wPnN90VHbqH7q/E/lMP0dX6VzyQ+8j8pu+ig/a+FP8U5nhXvNKNGNFtAS0W0Y0S8BbRbS7RbSKW0UxjGimgVvCEIGwhCWlQSZEmBMIQgcu02tRqH7hHrpMRXfWbfaNIvRqIvtFDYcyNQPdMBXcSwUd+Fs19w5+PdKE2O/M31mtpm5DwgoXi1vjK4jFUxlVQWsCAqWHxlR09Hq2THUspBz5lqXN3YMDbTkDlPLSbTbqFqD23qVbyB19xM+ebO2h1eIpu9F0pq4ZigPWGxuLtxF+HHnPpmJGek4B0em1j4rpOVYp+UvhNifrzNhQ/VlkZle11DJ2lBHFb2vaJZ/E+E0XQUXxY36Uqm8W5TpGHwGyq+FrV6NemyOqrv1VwS3aRtzLpvHuM1nRcftf9v8AFNP0/pr+r030uKhUeDISf6RMx0VOlX/b/FOdaV7zRbGXaKeAtol4xotpApoto1opoUl4toxpRoCoSbSYGwhAQlRaEIQJkyIQJmH6UbKNN+uQfRu2tvqOeB7jw9JuIuvRWojI4DIwIYHiIHy8a8j3HT0MW9FW0IF+TjXyPGejtjZrYaoUN2Rrmm/2l7+8cZxX0tYMOR3+RlCVw9MfWyHuZlPu0m16K4wFOoZ2c3JRnbMSttV8pkFI4G33W3ideFrFWBBsQQQRwMaHVVQozId6Mymx5G27ynu9B2Y4zjbqqm/yni4yt1js/slrE8FvYA+8E+c9roG6/rgF1JNKp7JvylR7P6Qz/wCNT/1r/wAjTN9FBZav+3+Kaf8ASCn/AI9M8q3xRpm+jO6t40/g0lV7TRTxjRTSBTxbS7RbSBbRTRrRTQpTRbRjRbQKwhCBsISJIlFoQhCJhCECYQhA5Np4BMRTam/HVW4o/AifOcVh3pVGpuLMpseR5EdxGs+ozwOlGyutp9ag+kpjUDe6byPEbx5xBib33i8sjWirwZp0j0EOYbzpyPy3GanoFTH63ewuKVTUbj7MyeBckHUcN4mx/R7Sviaj20WiRvvqzL+Rge307S+EB+zWQ/ysPnMl0bbtVR3If6psenP/ANJz9+n/AFTGdGNWq+FP4tJVe40W0a0U0gS0U0a0W0ilNFMY5ophAU0W0YwlDApaEtCBrRJEqJMomWlYQi0mUlhAmEIQJkQhAw3SjZPVVOtQfR1DqBuSpxHgd485nnE+p4rDpURqbi6uLH8x3z5vtHBPRqNTaxKnQ+zmXgREFtnA5G1sM3C3IcZ3YfFVKZPV1HQkDMUdkJ8bb5y4IWTzMsDqfGdDqxe0q7oVqVqtRSR2XdmW47iZ6XRVOxVfm6j0BP4p4GIbSazo/RyYanzfM58zp7gJzR3NFtGNFtCktFsI1otpAlpRhGNKMICWEoRHEShEBeWEvaTA0sm8peTeUXvJlLybwi0m8peTeBYGTeUvJvAtCVvC8KJ43SbZvXU86gF6YJta+ZOI+Y8+c9m8i8D53hxZAAABru8YIL/Gdu1aS06tREuqKbgcBcBiPC5nCOU6QrEbwPnfWb3DoFpoo3KigeQAmFopmqqO+/kNZsNl1gzCiWAJVil+JFtPeZxllrKR1Md42utotp11sKV4i3OKq4VwM2hHdCORotpdjKGAtpQy7SpgLIlSIwypgLhLQge+DJvF3k3lF7ybyl4XgMvC8pmhmgXvJvKZoZoF7wvKZoZoF7wvKZoZoGO22161Q3+uB6AAzz81p0Y9ru3e7E+NzOKq9gbcdJ0jt2NYVGY62Ww8TPSroWqUAnt9dTKkbwAbt/KDOfYdImmVABLvfUDs2sL39Z7+GwC0iGuXqG4DHgONhMMsbcttZlJjp69WpdTf/Br+UbhvYUHXsi9/CectXOSvBSAT4cPfHV8RkXTeRYfnNGbzam8jvMWxksZQmBUyDAmQTAgypkkypMAhIvCB7IMmFpNoESZNoWlESZNoWgRCWtC0CIS1oWgUkMTa/wDl+EZlmiwAammXqw4Op4a8dToZKPmeO2JXUkrlcb7qbN5g/nPJ/VajuKYVi7GwXKRr8J9UxS0qm5Ql+AN/cflPDoogrU27OrsoNuQb8j6TP5ZS6rT442WxTZ2zTRo00ZhnAObKDYkkn2uNry4pOKhYm4Aso5cT8p31z2gGO8n/AC/GQ4BFuJ09Z3WbzsMpRAW0JGZ/3jqR8omrULG5/wChO3aNhlUeJ+XznnMZRBMqZJMiBBEgiWkhYCysqVj8sMkDnywnRkhA9IS14i8nNAdeTE5oZoDoRIYybmA6AitZIvAbaTFANPc2dsvsq7m7HULwXx5n/O+BXZezS3bddOAPxtPYSiALhtDxANv7RiU7C3DgNxETWJIOota2gG6BzYtEIIZQbrY3ItfiQbXJmcGBRaispORL5UtuNiL342vPWxYvdnPZvuHE+HEww+GfKXyFddM1lNhxN90lm1lsZvaW0wAUWnnsMoqIVVv+N98tsqszAK2a63HbUqxNzv56W1E5NsYanSqZ3eyEh1LlaaFhv1OpF+Q5Ra7RDi1O5uLZ7EXXkvd3yK7MdXDOSNw0HgJxlpKUmPCPTCmVHOAZYIZ3rhYxcPA4FpmMWnO4U5OSVHItKW6udOWQVgc/Vwj7QgLyy2SOAk5YVz9WZPVzoAk5YHP1cOrnTkk5IHLlMvTplmC3tc7zuj8kTXDWIUEHgRvEg9WjhOr5EnjcExmcD8plcNtjaVIlXwNPEoDoyVEFS38YAntYXb7to+zcTT88Kw9zyD0aQap7PZXcW3knkBOoDq1sWNhc5nIv5zg/+Rv/AOvX8DUpqPRXnPWqM3s0aa97u72/hGh9ZdD0VxNyCiZjqQzWVR4DfKYipxqugUa5A1gfG84Mrt7bsfup9Go8La+pMouEpBi4ppnO9yoLnxY6mVHJtV1xDItMZwpJLgdgA8A3HyhSwSrwneZFoVzimBwlgsYRJtCFZZFo0iFoCrSLRtoZYCSJBEdaVMBVpEZCAtY1YQkVYQhCUWEsIQhBAQhAkS4hCFTCEIEGEIQIMiEIQQEIQAyDCECIQhAgyhhCBSEIQP/Z" alt="" />
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rwheMxEM3fmSYPupbWLruSTt9zvTkSvs6w&usqp=CAU" alt="" />
      </div>
      <div className="pro-text">

      </div>
    </div>
  )
}

export default ProDetail
