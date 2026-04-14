/**
 * Spanish Language Pack (es-ES)
 */
export default {
  // Común
  common: {
    title: 'YSHOP Tienda',
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    submit: 'Enviar',
    save: 'Guardar',
    delete: 'Eliminar',
    edit: 'Editar',
    add: 'Añadir',
    search: 'Buscar',
    reset: 'Restablecer',
    refresh: 'Actualizar',
    back: 'Volver',
    action: 'Acción',
    status: 'Estado',
    createTime: 'Fecha de Creación',
    updateTime: 'Fecha de Actualización',
    remark: 'Observación',
    noData: 'Sin Datos',
    loading: 'Cargando...',
    success: 'Éxito',
    failed: 'Fallido'
  },
  // Barra de Navegación
  navbar: {
    dashboard: 'Panel de Control',
    profile: 'Perfil',
    logout: 'Cerrar Sesión',
    settings: 'Configuración',
    language: 'Idioma'
  },
  // Inicio de Sesión
  login: {
    title: 'Inicio de Sesión',
    username: 'Nombre de Usuario',
    password: 'Contraseña',
    rememberMe: 'Recordarme',
    forgotPassword: '¿Olvidó su contraseña?',
    loginBtn: 'Iniciar Sesión',
    pleaseEnterUsername: 'Por favor, introduzca el nombre de usuario',
    pleaseEnterPassword: 'Por favor, introduzca la contraseña',
    loggingIn: 'Iniciando sesión...'
  },
  // Permisos
  permission: {
    hasPermission: 'Tiene Permiso',
    noPermission: 'Sin Permiso',
    adminOnly: 'Solo Administradores'
  },
  // Tabla
  table: {
    total: 'Total {total} elementos',
    page: 'Página',
    pageSize: 'Tamaño de Página',
    currentPage: 'Página Actual',
    goto: 'Ir a',
    prevPage: 'Anterior',
    nextPage: 'Siguiente',
    firstPage: 'Primera',
    lastPage: 'Última'
  },
  // Validación
  validation: {
    required: '{field} es obligatorio',
    minLength: '{field} debe tener al menos {min} caracteres',
    maxLength: '{field} no puede exceder {max} caracteres',
    email: 'Por favor, introduzca un correo electrónico válido',
    phone: 'Por favor, introduzca un número de teléfono válido',
    url: 'Por favor, introduzca una URL válida',
    number: 'Por favor, introduzca un número',
    pattern: 'El formato de {field} es incorrecto'
  },
  // Mensajes
  message: {
    deleteConfirm: '¿Está seguro de que desea eliminar este registro?',
    deleteSuccess: 'Eliminado correctamente',
    saveSuccess: 'Guardado correctamente',
    updateSuccess: 'Actualizado correctamente',
    addSuccess: 'Añadido correctamente',
    operationFailed: 'Operación fallida, inténtelo de nuevo más tarde',
    networkError: 'Error de red, compruebe su conexión'
  },
  // Página de Ejemplo
  example: {
    title: 'Página de Ejemplo i18n',
    description: 'Esta es una página de ejemplo que demuestra cómo usar vue-i18n',
    welcomeMessage: 'Bienvenido al Sistema de Gestión de YSHOP Tienda',
    switchLanguage: 'Cambiar Idioma',
    currentLanguage: 'Idioma Actual',
    usageTitle: 'Uso',
    usageCode: 'Use {{ $t("clave") }} en plantillas o this.$t("clave") en JavaScript',
    dynamicContent: 'Ejemplo de Contenido Dinámico',
    nestedExample: 'Ejemplo de Clave Anidada',
    interpolationExample: 'Ejemplo de Interpolación: ¡Hola, {name}!'
  }
}
