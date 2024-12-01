const formData1 = (form) => {
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    return {name, chef, supplier, taste, category, details, photo}
}

export default formData1;
