import { EventDao } from 'api/events/model/event.dao'
import { EventModel } from 'api/events/model/event.model'

describe('Event', () => {
  describe('Dao', () => {

    beforeEach(() => {
      EventModel.find = jest.fn().mockResolvedValue({})
      EventModel.create = jest.fn().mockResolvedValue({})
      EventModel.findOne = jest.fn().mockResolvedValue({})
    });

    afterEach(() => {
      EventModel.find.mockReset()
      EventModel.create.mockReset()
      EventModel.findOne.mockReset()
    });

    afterAll(() => {
      EventModel.find.mockRestore()
      EventModel.create.mockRestore()
      EventModel.findOne.mockRestore()
    });

    it('should return all models', async () => {
      EventDao.findAll()

      expect(EventModel.find).toHaveBeenCalled();
    }); 

    it('should find Event by id', () => {
      EventDao.findById(42)

      expect(EventModel.findOne).toHaveBeenCalledWith({ _id: 42 })
    });

    it('should create Event', () => {
      EventDao.insert({ number: 42 })

      expect(EventModel.create).toHaveBeenCalledWith({ number: 42 })
    })
  })
})
