let vm = null
const setVm = (_this) => { vm = _this }
export default {
  setVm,
  formZenRules: {
    key1: [{ required: true, message: '标题文字不能为空，请输入相应信息', trigger: 'blur' }],
    // key2: [{ required: true, message: 'key2 不能为空', trigger: 'blur' }],
    key3: [{ required: true, message: 'key3 不能为空', trigger: 'blur' }],
    key4: [{ required: true, message: 'key4 不能为空', trigger: 'blur' }],
    key5: [{ validator: validatorKey5, message: '下拉选框为必填选框', trigger: 'blur' }]
  }
}

function validatorKey5 (rule, value, callback) {
  if (value === '' || (Array.isArray(value) && value.length === 0) || !value) {
    callback(new Error('err'))
  } else {
    // 逻辑校验 如果 校验成功 但是不符合 另外条件内容，但是又要 认为成功 就用这种方式
    vm.InnerFormErrs.push('123')
    callback()
  }
}