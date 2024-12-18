import Button from "@/components/button/Button"
import Layout from "@/components/layout/Layout"

const EditProfile = () => {
    return (<Layout image={image} descripcion={descripcion} title={title} url={url}>
        {/*Form para editar perfil */}

        <div className={styles.actions}>
            <Button
                // className={styles.saveProfileButton}
                color={!isSaving ? 'blue' : 'disabled'}
                onClick={handleSave}>
                {isSaving ? 'Gaurdando...' : 'Guardar cambios'}
            </Button>
        </div>
        <TextField
            disabled={isSaving}
            fullWidth={true}
            label='Tú nombre o el nombre de tu tienda'
            margin='normal'
            value={userLogged?.name}
            onChange={e => setUserData({ ...userLogged, name: e.target.value })} />
        <TextField
            disabled={isSaving}
            fullWidth={true}
            label='Correo electrónico'
            margin='normal'
            value={userLogged?.email}
            onChange={e =>
                setUserData({ ...userLogged, email: e.target.value })
            } />
        <TextField
            disabled={true}
            fullWidth={true}
            label='Número registrado'
            margin='normal'
            value={userLogged?.phone} />
        <br /><br />
        {/* <CiudadControl
              isEditable
              setUserData={setUserData}
              userLogged={userLogged} /> */}
        <TextField
            disabled={isSaving}
            fullWidth={true}
            label='Número de documento de identificación (no obligatorio)'
            margin='normal'
            value={userLogged?.document_number}
            helperText='Información utilizada para la compras de productos online' />
        <p>
            <div>
                <Alert severity="info">
                    <label>
                        <b>Imagen de perfil</b>
                        <br />
                    </label>
                    <input
                        disabled={isSaving}
                        id='profileElement'
                        label='Cambiar'
                        type='file'
                    />
                    <p>
                        La imagen debe ser como mínimo 500 x 500px <br />
                        Debe ser cuadrada
                    </p>
                </Alert>
            </div>
        </p>
    </Layout>)
}

export default EditProfile
