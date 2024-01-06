const errorHandler = (err,req,res, next)=>{
    if(err.name === 'notFound'){
        res.status(404).json({message: 'Target Tidak Ditemukan'})
    }else if(err.name === 'nullResponse'){
        res.status(400).json({message: 'Data Tidak Ditemukan'})
    }else if(err.name === 'nullRequest'){
        res.status(400).json({message: 'title atau deskripsi kosong'})
    }else if(err.name === 'nullDelete'){
        res.status(400).json({message: 'Tidak dapat menghapus data kosong'})
    }
}
module.exports = errorHandler