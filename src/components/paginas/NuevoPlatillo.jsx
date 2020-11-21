import React from 'react';
import {useFormik} from 'formik'
import * as YUP from 'yup'
const NuevoPlatillo = () => {

    //validacion y leer los datos del formulario
    const formik = useFormik({
        initialValues:{
            nombre:'',
            precio:'',
            categoria:'',
            imagen:'',
            descripcion:'',
        },
        validationSchema: YUP.object({
            nombre: YUP.string().min(3, 'Los platillos deben tener al menos 3 caracteres').required('El Nombre del platillo es obligatorio'),
            precio: YUP.number().min(1, 'Deber agregar un numero').required('El precio es obligatorio'),
            categoria: YUP.string().required('La categoria es obligatoria'),
            descripcion: YUP.string().min(10, "La descripcion debe tener al menos 10 caracteres").required('La categoria es obligatoria'),
                        
        }),
        onSubmit: datos => {
            console.log(datos)
        }
    })

    return ( 
        <>
        <h1 className="text-3xl font-light mb-4">Agregar Platillo</h1>
        <div className="flex justify-center mt-10">
            <div className="w-full max-w-3xl">
                <form onSubmit={formik.handleSubmit} action="">
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                        <input type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                            id="nombre"
                            placeholder="Nombre Platillo" 
                            value={formik.values.nombre}
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.nombre && formik.errors.nombre 
                    ?
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                            <p className="font-bold">Hubo un error</p>
                            <p>{formik.errors.nombre}</p>
                        </div>
                    :null
                
                    }
                    <div className="mb-4">
                        <label htmlFor="precio" className="block text-gray-700 text-sm font-bold mb-2">Precio</label>
                        <input type="number"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                            id="precio"
                            placeholder="precio Platillo" 
                            min="0"
                            value={formik.values.precio}
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.precio && formik.errors.precio 
                    ?
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                            <p className="font-bold">Hubo un error</p>
                            <p>{formik.errors.precio}</p>
                        </div>
                    :null
                
                    }
                    <div className="mb-4">
                        <label htmlFor="categoria" className="block text-gray-700 text-sm font-bold mb-2">Categoria</label>
                        <select name="categoria" value={formik.values.categoria} onChange={formik.handleChange} onBlur={formik.handleBlur}  id="categoria" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
                           
                            <option value="">-- Seleccione --</option>
                            <option value="desayuno">Desayuno</option>
                            <option value="comida">Comida</option>
                            <option value="cena">Cena</option>
                            <option value="bedida">Bedidas</option>
                            <option value="postre">Postres</option>
                            <option value="ensalada">Ensaladas</option>
                        </select>
                    </div>
                    {formik.touched.categoria && formik.errors.categoria 
                    ?
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                            <p className="font-bold">Hubo un error</p>
                            <p>{formik.errors.categoria}</p>
                        </div>
                    :null
                
                    }
                    <div className="mb-4">
                        <label htmlFor="imagen" className="block text-gray-700 text-sm font-bold mb-2">Imagen</label>
                        <input type="file" value={formik.values.imagen}  onChange={formik.handleChange} onBlur={formik.handleBlur}  id="imagen" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="descripcion" className="block text-gray-700 text-sm font-bold mb-2">Descricion</label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                            id="descripcion"
                            placeholder="Nombre Platillo"  
                            rows="10"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.descripcion}
                        >
                        
        
                        </textarea>
                    </div>
                    {formik.touched.descripcion && formik.errors.descripcion 
                    ?
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                            <p className="font-bold">Hubo un error</p>
                            <p>{formik.errors.descripcion}</p>
                        </div>
                    :null
                
                    }
                    <input type="submit" value="Agregar Platillo" className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold" />
                </form>
            </div>
        </div>
        </>
     );
}
 
export default NuevoPlatillo;