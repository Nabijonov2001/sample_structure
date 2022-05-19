import { SampleStorage } from './mongo/sample'
import { AdminStorage } from './mongo/admin'

interface IStorage {
    sample: SampleStorage
    admin: AdminStorage
}

export let storage: IStorage = {
    sample: new SampleStorage(),
    admin: new AdminStorage()
}
