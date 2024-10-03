const query = {
    populate: {
        content: {
            on: {
                'blocks.header': {
                  populate: '*'
                },
                'blocks.hero': {
                    populate: {
                        backgroundImg: {
                            fields: ['id', 'name', 'alternativeText', 'url']
                        }
                    }
                },
                'blocks.barbers': {
                    populate: {
                        Card: {
                            populate: {
                                image: {
                                    fields: ['id', 'name', 'alternativeText', 'url']
                                }
                            }
                        }
                    }
                },
                'blocks.services': {
                    populate: {
                        service: {
                            populate: {
                                icon: {
                                    fields: ['id', 'name', 'alternativeText', 'url']
                                }
                            }
                        }
                    }
                },
                'blocks.salons': {
                    populate: {
                        backgroundImg: {
                            fields: ['id', 'name', 'alternativeText', 'url']
                        }
                    }
                },
                'blocks.franchise': {
                    populate: {
                        button: {
                            populate: '*'
                        },
                        backgroundImg: {
                            fields: ['id', 'name', 'alternativeText', 'url']
                        }
                    }
                }
            }
        }
    },
    locale: "en"
}